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
const firestore = google.firestore('v1beta2');

/*
 * Lists composite indexes.
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
      'https://www.googleapis.com/auth/datastore',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await firestore.projects.databases.collectionGroups.indexes.list({
    // The filter to apply to list results.
    filter: 'placeholder-value',
    // The number of results to return.
    pageSize: 'placeholder-value',
    // A page token, returned from a previous call to FirestoreAdmin.ListIndexes, that may be used to get the next page of results.
    pageToken: 'placeholder-value',
    // A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
    parent: 'projects/my-project/databases/[^/]+/collectionGroups/[^/]+',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
