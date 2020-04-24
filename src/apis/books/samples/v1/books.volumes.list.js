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
const books = google.books('v1');

/*
 * Performs a book search.
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
    scopes: ['https://www.googleapis.com/auth/books'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await books.volumes.list({
    // Restrict to volumes by download availability.
    download: 'placeholder-value',
    // Filter search results.
    filter: 'placeholder-value',
    // Restrict results to books with this language code.
    langRestrict: 'placeholder-value',
    // Restrict search to this user's library.
    libraryRestrict: 'placeholder-value',
    // The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
    maxAllowedMaturityRating: 'placeholder-value',
    // Maximum number of results to return.
    maxResults: 'placeholder-value',
    // Sort search results.
    orderBy: 'placeholder-value',
    // Restrict and brand results for partner ID.
    partner: 'placeholder-value',
    // Restrict to books or magazines.
    printType: 'placeholder-value',
    // Restrict information returned to a set of selected fields.
    projection: 'placeholder-value',
    // Full-text search query string.
    q: 'placeholder-value',
    // Set to true to show books available for preorder. Defaults to false.
    showPreorders: 'placeholder-value',
    // String to identify the originator of this request.
    source: 'placeholder-value',
    // Index of the first result to return (starts at 0)
    startIndex: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
