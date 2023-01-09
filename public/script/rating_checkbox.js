const ratingDivs = document.querySelectorAll('.rating')
ratingDivs.forEach((ratingDiv) => {
  // get my data-rating
  const totalStars = ratingDiv.getAttribute('data-totalStars')
  const reviewCount = ratingDiv.getAttribute('data-reviewCount')
  const starRating = Math.round(totalStars / reviewCount)
  ratingDiv.children.item(starRating - 1).checked = true
  // choose which one to check
})
