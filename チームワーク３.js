// タイトルをフェードイン表示
window.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");
  title.style.opacity = 0;
  title.style.transition = "opacity 2s ease";
  setTimeout(() => {
    title.style.opacity = 1;
  }, 100);

  // h2 見出しをクリックしたら、次の p タグを表示/非表示にする
  const headings = document.querySelectorAll("h2");
  headings.forEach((heading) => {
    heading.style.cursor = "pointer"; // カーソルをポインターに
    heading.addEventListener("click", () => {
      const content = heading.nextElementSibling;
      if (content.style.display === "none") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});
