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
const serviceusage = google.serviceusage('v1beta1');

/*
 * Retrieves a summary of all quota information visible to the service
 * consumer, organized by service metric. Each metric includes information
 * about all of its defined limits. Each limit includes the limit
 * configuration (quota unit, preciseness, default value), the current
 * effective limit value, and all of the overrides applied to the limit.
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
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await serviceusage.services.consumerQuotaMetrics.list({
    // Requested size of the next page of data.
    pageSize: 'placeholder-value',
    // Token identifying which result to start with; returned by a previous list call.
    pageToken: 'placeholder-value',
    // Parent of the quotas resource.  Some example names would be: projects/123/services/serviceconsumermanagement.googleapis.com folders/345/services/serviceconsumermanagement.googleapis.com organizations/456/services/serviceconsumermanagement.googleapis.com
    parent: '[^/]+/[^/]+/services/[^/]+',
    // Specifies the level of detail for quota information in the response.
    view: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
