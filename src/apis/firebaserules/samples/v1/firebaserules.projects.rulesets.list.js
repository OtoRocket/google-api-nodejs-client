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
const firebaserules = google.firebaserules('v1');

/*
 * List `Ruleset` metadata only and optionally filter the results by `Ruleset`
 * name.
 *
 * The full `Source` contents of a `Ruleset` may be retrieved with
 * GetRuleset.
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
      'https://www.googleapis.com/auth/firebase',
      'https://www.googleapis.com/auth/firebase.readonly',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await firebaserules.projects.rulesets.list({
    // `Ruleset` filter. The list method supports filters with restrictions on `Ruleset.name`.  Filters on `Ruleset.create_time` should use the `date` function which parses strings that conform to the RFC 3339 date/time specifications.  Example: `create_time > date("2017-01-01T00:00:00Z") AND name=UUID-*`
    filter: 'placeholder-value',
    // Resource name for the project.  Format: `projects/{project_id}`
    name: 'projects/my-project',
    // Page size to load. Maximum of 100. Defaults to 10. Note: `page_size` is just a hint and the service may choose to load less than `page_size` due to the size of the output. To traverse all of the releases, caller should iterate until the `page_token` is empty.
    pageSize: 'placeholder-value',
    // Next page token for loading the next batch of `Ruleset` instances.
    pageToken: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
