import { describe, it, expect } from "vitest";
import { musicList } from "./music";

describe("musicList", () => {
  it("should have at least 3 items", () => {
    expect(musicList.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'Uptown Funk' - Mark Ronson feat. Bruno Mars", () => {
    expect(musicList).toContain("'Uptown Funk' - Mark Ronson feat. Bruno Mars");
  });
});

