import Parser from "rss-parser";

export async function fetchMediumPosts(username: string, limit = 10) {
  const parser = new Parser();
  const feed = await parser.parseURL(`https://medium.com/feed/@${username}`);
  return feed.items.slice(0, limit).map((item) => {
    let image = "";
    console.log(item);
    if (item?.enclosure?.url) {
      image = item.enclosure.url;
    } else if (item?.["content:encoded"]) {
      const imgMatch = item?.["content:encoded"].match(
        /<img[^>]+src="([^"]+)"/
      );
      if (imgMatch) {
        image = imgMatch[1];
      }
    }

    return {
      title: item.title,
      link: item.link,
      date: item.pubDate
        ? new Date(item.pubDate).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
        : "",
      summary: item?.["content:encodedSnippet"],
      image: image,
      tags: item.categories || [],
    };
  });
}
