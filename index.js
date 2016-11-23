document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'n': {
      if (event.ctrlKey) {
        const root = location.pathname.split('/')[1]
        location.href = `/${root}/new`
      }
    }
  }
})
