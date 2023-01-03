let chapters = []

const renderChapters = () => {
  let chapterStr = ''
  for (let i = 0; i < chapters.length; i++) {
    chapterStr += `<div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Chapter ${i + 1}</h2>
          <p>${chapters[i].chapterTitle}</p>
        </div>
      </div>`
  }
  console.log('chapterStr', chapterStr)
  document.getElementById('show-content').innerHTML = chapterStr
}

const addChapter = (chapter) => {
  chapters.push(chapter)
  renderChapters()
}

const chapterTitleButton = () => {
  document.getElementById('add-chapter-form').style.display = 'block'
  document.getElementById('chapterTitle').value = ''
}