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
const apigee = google.apigee('v1');

/*
 * Lists all users.
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
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await apigee.organizations.providers.users.list({
    // Number of items.
    count: 'placeholder-value',
    // String used to filter the list.
    filter: 'placeholder-value',
    // Required. Name of the identity provider. Use the following structure in your request:   `organizations/{org}/providers/{provider}`
    parent: 'organizations/[^/]+/providers/[^/]+',
    // Field on which to sort the list.
    sortBy: 'placeholder-value',
    // Order in which to sort the list, such as ascending or descending.
    sortOrder: 'placeholder-value',
    // Starting index of the list.
    startIndex: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
