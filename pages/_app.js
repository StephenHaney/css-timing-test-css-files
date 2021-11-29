import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

if (typeof document !== 'undefined') {
  // Generate 5000 unique classes and add them to the sheet
  for (let i = 0; i < 5000; i++) {
    const genClass = `
      --some-var: ${i};
      background-color: rgb(255, 255, ${i % 255});
      font-size: ${i / 1000}px;
    `

    document.styleSheets[0].insertRule(`.class-${i}{genClass}`);
  }

  // Add one more to actually use on the page
  document.styleSheets[0].insertRule('.use-a-style-in-the-page{background-color:teal;}');
}
