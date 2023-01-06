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

let divTagStr = ''
let chapterIndex = 1
const pushDivTag = () => {
  divTagStr += `<div class="card card-compact card-bordered w-full bg-base-100 shadow-xl px-8 pb-6 mt-2">
 <div class="card-body">
   <h2 class="card-title">Chapter <span>${chapterIndex}</span></h2>
 </div>
 <input
   type="text"
   placeholder="Chapter title"
   name="chapterTitle"
   class="input input-bordered w-full"
   id="chapterTitle"
   autofocus
 />
 <input
   type="file"
   placeholder="Video"
   name="videoFile"
   class="file-input file-input-bordered w-full mt-5"
   accept="video/mp4,video/x-m4v,video/*"
   id="videoFile"
   autofocus
 />
</div>`
  chapterIndex++
  document.getElementById('show-content').innerHTML = divTagStr
}
