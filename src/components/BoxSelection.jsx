import { useState } from "react";

export function BoxSelection() {
  const [liked, setLiked] = useState(true);

  function handlesChange(e) {
    setLiked(e.target.checked);
  }

  return (
    <div>
      <form>
        <input
          type="checkbox"
          name="selected"
          checked={liked}
          onChange={handlesChange}
        />
        <label htmlFor="selected">I liked this</label>
        <p>You {liked ? "liked" : "did not liked"} this.</p>
      </form>
    </div>
  );
}
