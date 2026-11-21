// Бүх хуудсанд дахин ашиглагдах ерөнхий skeleton:
// <section class="section"> <div class="container"> <h1>title</h1> <p>subtitle</p> content </div> </section>
export function renderPageLayout({
  id = "",
  title = "",
  subtitle = "",
  content = "",
  sectionClass = "section",
  containerClass = "container",
}) {
  return `
    <section ${id ? `id="${id}"` : ""} class="${sectionClass}">
      <div class="${containerClass}">
        ${title ? `<h1 class="title is-3 app-title">${title}</h1>` : ""}
        ${subtitle ? `<p class="subtitle is-6 app-subtitle">${subtitle}</p>` : ""}
        ${content}
      </div>
    </section>
  `;
}
