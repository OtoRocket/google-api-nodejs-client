// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*! THIS FILE IS AUTO-GENERATED */

const {google} = require('googleapis');
const dialogflow = google.dialogflow('v2beta1');

/*
 * Processes a natural language query and returns structured, actionable data
 * as a result. This method is not idempotent, because it may cause contexts
 * and session entity types to be updated, which in turn might affect
 * results of future queries.
 */

async function main() {
  // By default, this method will look for, in order:
  // 1. An environment variable set to `GOOGLE_APPLICATION_CREDENTIALS`
  //    pointing to a service account credential file
  // 2. A GCE metadata server, present in Google Cloud products like
  //    Compute Engine, Kubernetes Engine, Cloud Run, etc
  // 3. A local OAuth token written by the Cloud SDK, obtained by running
  //    `gcloud auth application-default login`.  This is preferred for local
  //    development.
  const auth = new google.auth.GoogleAuth({
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/dialogflow',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await dialogflow.projects.locations.agent.environments.users.sessions.detectIntent(
    {
      // Required. The name of the session this query is sent to. Format: `projects/<Project ID>/agent/sessions/<Session ID>`, or `projects/<Project ID>/agent/environments/<Environment ID>/users/<User ID>/sessions/<Session ID>`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we are using "-". It's up to the API caller to choose an appropriate `Session ID` and `User Id`. They can be a random number or some type of user and session identifiers (preferably hashed). The length of the `Session ID` and `User ID` must not exceed 36 characters.
      session:
        'projects/my-project/locations/my-location/agent/environments/[^/]+/users/[^/]+/sessions/[^/]+',

      // Request body metadata
      requestBody: {
        // request body parameters
      },
    }
  );
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
