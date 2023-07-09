import {setupWorker} from "msw";
import {handlers} from "@/__msw__/handlers";

export const worker = setupWorker(...handlers)