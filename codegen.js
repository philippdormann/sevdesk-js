import { codegen } from "@odit/swagger-axios-codegen";
import openapidoc from "./openapi.json" assert { type: "json" };

codegen({
  methodNameMode: "operationId",
  source: openapidoc,
  outputDir: "./src",
  useStaticMethod: true,
});
