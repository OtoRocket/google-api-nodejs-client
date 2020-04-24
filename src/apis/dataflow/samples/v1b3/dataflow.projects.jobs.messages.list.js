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
const dataflow = google.dataflow('v1b3');

/*
 * Request the job status.
 *
 * To request the status of a job, we recommend using
 * `projects.locations.jobs.messages.list` with a [regional endpoint]
 * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using
 * `projects.jobs.messages.list` is not recommended, as you can only request
 * the status of jobs that are running in `us-central1`.
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
      'https://www.googleapis.com/auth/compute',
      'https://www.googleapis.com/auth/compute.readonly',
      'https://www.googleapis.com/auth/userinfo.email',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await dataflow.projects.jobs.messages.list({
    // Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).
    endTime: 'placeholder-value',
    // The job to get messages about.
    jobId: 'placeholder-value',
    // The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
    location: 'placeholder-value',
    // Filter to only get messages with importance >= level
    minimumImportance: 'placeholder-value',
    // If specified, determines the maximum number of messages to return.  If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
    pageSize: 'placeholder-value',
    // If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
    pageToken: 'placeholder-value',
    // A project id.
    projectId: 'placeholder-value',
    // If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).
    startTime: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
