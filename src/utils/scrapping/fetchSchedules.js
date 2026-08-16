const axios = require('axios');

/**
 * Class routines and exam schedules published on the BUTEX site.
 *
 * Unlike scrapeResults.js this does NOT parse HTML. butex.edu.bd runs WordPress
 * with its REST API open, which hands back structured JSON — so there is no
 * `.large-9.columns h3` selector to break the day they restyle the site.
 *
 * There is no "routine" category on the site (routines live inside Academic
 * Notices, mixed with everything else), so the only way to isolate them is a
 * search. Two terms cover it: "routine" (~110 posts) and "schedule" (~370),
 * the latter already covering "class schedule" and "exam schedule".
 *
 * Output shape is identical to scrapeResults so clients can reuse one model.
 */

const WP_POSTS = 'https://www.butex.edu.bd/wp-json/wp/v2/posts';
const SEARCH_TERMS = ['routine', 'schedule'];

/** WordPress hands back HTML-encoded titles. */
const decode = (s = '') =>
  s
    .replace(/<[^>]*>/g, '')
    .replace(/&#(\d+);/g, (_m, d) => String.fromCharCode(d))
    .replace(/&#0?39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .trim();

/** Match the "August 4, 2026" format the results endpoint already returns. */
const formatDate = iso => {
  const d = new Date(iso);
  if (isNaN(d)) return '';
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const fetchSchedules = async (limit = 10) => {
  try {
    // Ask for more than `limit` per term, since the two sets overlap heavily
    // and we sort by date across the merged list before trimming.
    const perTerm = Math.min(Math.max(limit * 3, 30), 100);

    const responses = await Promise.all(
      SEARCH_TERMS.map(term =>
        axios
          .get(WP_POSTS, {
            params: {
              search: term,
              per_page: perTerm,
              orderby: 'date',
              order: 'desc',
              _fields: 'id,date,link,title',
            },
            timeout: 15000,
          })
          .catch(err => {
            console.error(`schedule fetch failed for "${term}":`, err.message);
            return { data: [] };
          })
      )
    );

    const byId = new Map();
    responses.forEach(res => {
      (res.data || []).forEach(post => {
        if (!byId.has(post.id)) byId.set(post.id, post);
      });
    });

    return [...byId.values()]
      .sort((a, b) => String(b.date).localeCompare(String(a.date)))
      .slice(0, limit)
      .map(post => ({
        href: post.link || '',
        content: decode(post.title && post.title.rendered),
        date: formatDate(post.date),
      }));
  } catch (error) {
    console.error('Error fetching schedules:', error.message);
    return [];
  }
};

module.exports = fetchSchedules;
