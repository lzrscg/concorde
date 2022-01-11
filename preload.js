window.addEventListener('DOMContentLoaded', () => {
  window.sdk = "helllloo";
  const replaceText = (selector, text) => {
    console.log('hello world')
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})

