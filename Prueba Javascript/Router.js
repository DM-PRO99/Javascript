export function navigate(path) {
  history.pushState({}, '', path);
  router();
}

export function router() {
  const path = window.location.pathname;
  const app = document.getElementById('app');

  fetch(`${path}.html`)
    .then(res => {
      if (!res.ok) throw new Error('404');
      return res.text();
    })
    .then(html => {
      app.innerHTML = html;
    })
    .catch(() => {
      fetch('/not-found.html')
        .then(res => res.text())
        .then(html => app.innerHTML = html);
    });
}
