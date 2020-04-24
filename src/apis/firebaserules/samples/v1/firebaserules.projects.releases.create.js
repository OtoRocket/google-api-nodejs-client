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
 * Create a `Release`.
 *
 * Release names should reflect the developer's deployment practices. For
 * example, the release name may include the environment name, application
 * name, application version, or any other name meaningful to the developer.
 * Once a `Release` refers to a `Ruleset`, the rules can be enforced by
 * Firebase Rules-enabled services.
 *
 * More than one `Release` may be 'live' concurrently. Consider the following
 * three `Release` names for `projects/foo` and the `Ruleset` to which they
 * refer.
 *
 * Release Name                    | Ruleset Name
 * --------------------------------|-------------
 * projects/foo/releases/prod      | projects/foo/rulesets/uuid123
 * projects/foo/releases/prod/beta | projects/foo/rulesets/uuid123
 * projects/foo/releases/prod/v23  | projects/foo/rulesets/uuid456
 *
 * The table reflects the `Ruleset` rollout in progress. The `prod` and
 * `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23`
 * refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be
 * updated using the UpdateRelease method.
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
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await firebaserules.projects.releases.create({
    // Resource name for the project which owns this `Release`.  Format: `projects/{project_id}`
    name: 'projects/my-project',

    // Request body metadata
    requestBody: {
      // request body parameters
    },
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
