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
const cloudresourcemanager = google.cloudresourcemanager('v1');

/*
 * Request that a new Project be created. The result is an Operation which
 * can be used to track the creation process. This process usually takes a few
 * seconds, but can sometimes take much longer. The tracking Operation is
 * automatically deleted after a few hours, so there is no need to call
 * DeleteOperation.
 *
 * Authorization requires the Google IAM permission
 * `resourcemanager.projects.create` on the specified parent for the new
 * project. The parent is identified by a specified ResourceId,
 * which must include both an ID and a type, such as organization.
 *
 * This method does not associate the new project with a billing account.
 * You can set or update the billing account associated with a project using
 * the [`projects.updateBillingInfo`]
 * (/billing/reference/rest/v1/projects/updateBillingInfo) method.
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
  const res = await cloudresourcemanager.projects.create({
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
