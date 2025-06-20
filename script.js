


const newsArticles = [
    {
      title: "Summer Plumbing Tips to Save Water & Money",
      date: "June 10, 2025",
      summary: "Learn how to prepare your plumbing system for summer and reduce water costs effectively."
    },
    {
      title: "{Fast Flushing Plumbing} Wins Local Business Excellence Award",
      date: "May 22, 2025",
      summary: "We are proud to be recognized as a top service provider in the region!"
    },
    {
      title: "Smart Plumbing: The Future is Here",
      date: "May 1, 2025",
      summary: "Discover new technology like leak sensors, smart faucets, and automated shut-off systems."
    },
    {
      title: "Understanding New Plumbing Codes in [Your State]",
      date: "April 17, 2025",
      summary: "Here's what you need to know about recent changes to plumbing codes and compliance."
    }
  ];
  
function renderArticles() {
    const container = document.getElementById("news-container");

    newsArticles.forEach(article => {
      const div = document.createElement("div");
      div.className = "news-article";
      div.innerHTML = `
        <h2>${article.title}</h2>
        <div class="date">${article.date}</div>
        <p>${article.summary}</p>
      `;
      container.appendChild(div);
    });
}
window.onload = renderArticles;




