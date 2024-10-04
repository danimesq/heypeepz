import axios from "axios";
import { TEST_URL } from "src/helpers/constants";
import { describe, expect, test } from "vitest";

describe("GET /health", () => {
  test("should respond with pong", async () => {
    const { data, status } = await axios.get(`${TEST_URL}/health`);

    expect(status).toBe(200);
    expect(data.ping).toBe("pong");
  });
});
