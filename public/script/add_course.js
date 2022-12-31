let chapters = []

const renderChapters = () => {
  let chapterStr = ''
  for (let i = 0; i < chapters.length; i++) {
    chapterStr += `<li class="mt-0 ml-5 pl-3">${chapters[i].chapterTitle}</li>`
  }
  document.getElementById('chapters').innerHTML = chapterStr
}

const addChapter = (chapter) => {
  chapters.push(chapter)
  renderChapters()
}

const chapterTitleButton = () => {
  document.getElementById('add-chapter-form').style.display = 'block'
  document.getElementById('chapterTitle').value = ''
}
