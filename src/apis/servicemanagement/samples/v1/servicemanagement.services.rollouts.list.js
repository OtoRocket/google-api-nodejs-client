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
const servicemanagement = google.servicemanagement('v1');

/*
 * Lists the history of the service configuration rollouts for a managed
 * service, from the newest to the oldest.
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
      'https://www.googleapis.com/auth/cloud-platform.read-only',
      'https://www.googleapis.com/auth/service.management',
      'https://www.googleapis.com/auth/service.management.readonly',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await servicemanagement.services.rollouts.list({
    // Required. Use `filter` to return subset of rollouts. The following filters are supported:   -- To limit the results to only those in      [status](google.api.servicemanagement.v1.RolloutStatus) 'SUCCESS',      use filter='status=SUCCESS'   -- To limit the results to those in      [status](google.api.servicemanagement.v1.RolloutStatus) 'CANCELLED'      or 'FAILED', use filter='status=CANCELLED OR status=FAILED'
    filter: 'placeholder-value',
    // The max number of items to include in the response list. Page size is 50 if not specified. Maximum value is 100.
    pageSize: 'placeholder-value',
    // The token of the page to retrieve.
    pageToken: 'placeholder-value',
    // Required. The name of the service.  See the [overview](/service-management/overview) for naming requirements.  For example: `example.googleapis.com`.
    serviceName: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
