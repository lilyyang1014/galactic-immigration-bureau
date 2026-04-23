export function getRoute() {
  const hash = window.location.hash || "#/";
  const path = hash.replace("#", "");

  if (path === "/" || path === "") return { page: "home", params: {} };
  if (path === "/destinations") return { page: "destinations", params: {} };
  if (path.startsWith("/destinations/")) {
    const id = path.split("/")[2];
    return { page: "destination-detail", params: { id } };
  }
  if (path === "/apply") return { page: "apply", params: {} };
  if (path === "/profile") return { page: "profile", params: {} };
  if (path === "/about") return { page: "about", params: {} };

  return { page: "not-found", params: {} };
}

export function navigate(path) {
  window.location.hash = path;
}
