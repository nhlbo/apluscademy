Node.prototype.nextNode = function () {
  var cur = this
  while ((cur = cur.nextSibling)) {
    if (cur.nodeType === 1 && !cur.classList.contains('fakeContent')) {
      return cur
    }
  }
  return null
}

Node.prototype.firstNode = function () {
  var cur = this.firstChild
  if (cur.nodeType === 1) {
    return cur
  } else {
    return cur.nextNode()
  }
}

Element.prototype.typeAndDelete = function (options) {
  options = options || {}

  var contentList = this,
    curContent = contentList.getElementsByClassName('active')[0] || contentList.firstNode()

  // default options
  var selectTimePerWord = options.selectTimePerWord || 100,
    typeTimePerWord = options.typeTimePerWord || 150,
    delayAfterSelect = options.delayAfterSelect || 500,
    delayAfterDelete = options.delayAfterDelete || 1000,
    delayBetweenWords = options.delayBetweenWords || 3000

  // create fake content
  var fakeContent = contentList.getElementsByClassName('fakeContent')[0]
  if (!fakeContent) {
    fakeContent = document.createElement('span')
    fakeContent.classList.add('fakeContent')
    fakeContent.classList.add('selecting')
    contentList.appendChild(fakeContent)
  }

  // selecting handler
  var selecting = function () {
    // initial fake content with the same text
    fakeContent.innerHTML = curContent.innerHTML

    // start selecting
    var selectingAnimation = setInterval(function () {
      fakeContent.innerHTML = fakeContent.innerHTML.substring(0, fakeContent.innerHTML.length - 1)
      if (fakeContent.innerHTML.length <= 0) {
        clearInterval(selectingAnimation)

        deleting()
      }
    }, selectTimePerWord)
  }

  // deleting handler
  var deleting = function () {
    // delay, delete, and switch to the next content
    setTimeout(function () {
      fakeContent.classList.remove('selecting')
      fakeContent.classList.add('typing')
      curContent.classList.remove('active')

      curContent = curContent.nextNode() ? curContent.nextNode() : contentList.firstNode()
      curContent.classList.add('typing')
      curContent.classList.add('active')
    }, delayAfterSelect)

    // delay and start typing
    setTimeout(function () {
      typing()
    }, delayAfterDelete)
  }

  // typing handler
  var typing = function () {
    // delete fake content
    fakeContent.innerHTML = ''

    // start typing
    var typingAnimation = setInterval(function () {
      fakeContent.innerHTML = curContent.innerHTML.substring(0, fakeContent.innerHTML.length + 1)

      // stop typing
      if (fakeContent.innerHTML.length >= curContent.innerHTML.length) {
        fakeContent.classList.remove('typing')
        clearInterval(typingAnimation)

        // delay between words
        setTimeout(function () {
          curContent.classList.remove('typing')
          fakeContent.classList.add('selecting')
          selecting()
        }, delayBetweenWords)
      }
    }, typeTimePerWord)
  }

  return selecting()
}

document.getElementById('content').typeAndDelete({
  delayAfterDelete: 500
})
