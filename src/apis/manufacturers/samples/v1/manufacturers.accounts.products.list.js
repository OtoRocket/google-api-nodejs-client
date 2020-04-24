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
const manufacturers = google.manufacturers('v1');

/*
 * Lists all the products in a Manufacturer Center account.
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
    scopes: ['https://www.googleapis.com/auth/manufacturercenter'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await manufacturers.accounts.products.list({
    // The information to be included in the response. Only sections listed here will be returned.
    include: 'placeholder-value',
    // Maximum number of product statuses to return in the response, used for paging.
    pageSize: 'placeholder-value',
    // The token returned by the previous request.
    pageToken: 'placeholder-value',
    // Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
    parent: 'accounts/[^/]+',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
