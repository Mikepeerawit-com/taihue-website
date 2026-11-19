"use client";

import { useEffect, useState } from "react";

/** FormSubmit `_next` redirect. Uses the current origin so it also works on preview deployments. */
export default function NextUrl({ fallback, path }: { fallback: string; path: string }) {
  const [url, setUrl] = useState(fallback);
  useEffect(() => setUrl(window.location.origin + path), [path]);
  return <input type="hidden" name="_next" value={url} />;
}
