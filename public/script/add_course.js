let chapter = 0

const pushDivTag = () => {
  chapter++
  const divTagStr = `<div id="chapter-${chapter}" class="card card-compact card-bordered w-full bg-base-100 shadow-xl px-8 pb-6 mb-5 list-group-item">
 <button class="btn btn-sm btn-circle -right-3 -top-3 absolute course-btn" onclick="document.getElementById(this.parentNode.id).remove(); return false;">✕</button>
 <div class="card-body">
   <h2 class="card-title">Chapter</h2>
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
  document.getElementById('show-content').innerHTML += divTagStr
}