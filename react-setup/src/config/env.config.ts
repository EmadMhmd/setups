const vars = new Map();

// Config backend url
if (process.env.REACT_APP_BACKEND_BASE_URL) {
  vars.set('backendUrl', process.env.REACT_APP_BACKEND_BASE_URL);
} else if (import.meta.env.REACT_APP_BACKEND_BASE_URL) {
  vars.set('backendUrl', import.meta.env.REACT_APP_BACKEND_BASE_URL);
}

export default vars;
