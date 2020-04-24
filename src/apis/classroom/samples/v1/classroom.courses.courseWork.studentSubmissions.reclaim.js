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
const classroom = google.classroom('v1');

/*
 * Reclaims a student submission on behalf of the student that owns it.
 *
 * Reclaiming a student submission transfers ownership of attached Drive
 * files to the student and updates the submission state.
 *
 * Only the student that owns the requested student submission may call this
 * method, and only for a student submission that has been turned in.
 *
 * This request must be made by the Developer Console project of the
 * [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
 * create the corresponding course work item.
 *
 * This method returns the following error codes:
 *
 * * `PERMISSION_DENIED` if the requesting user is not permitted to access the
 * requested course or course work, unsubmit the requested student submission,
 * or for access errors.
 * * `FAILED_PRECONDITION` if the student submission has not been turned in.
 * * `INVALID_ARGUMENT` if the request is malformed.
 * * `NOT_FOUND` if the requested course, course work, or student submission
 * does not exist.
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
    scopes: ['https://www.googleapis.com/auth/classroom.coursework.me'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await classroom.courses.courseWork.studentSubmissions.reclaim({
    // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
    courseId: 'placeholder-value',
    // Identifier of the course work.
    courseWorkId: 'placeholder-value',
    // Identifier of the student submission.
    id: 'placeholder-value',

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
