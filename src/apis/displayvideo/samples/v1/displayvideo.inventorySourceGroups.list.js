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
const displayvideo = google.displayvideo('v1');

/*
 * Lists inventory source groups that are accessible to the current user.
 *
 * The order is defined by the
 * order_by parameter.
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
    scopes: ['https://www.googleapis.com/auth/display-video'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await displayvideo.inventorySourceGroups.list({
    // The ID of the advertiser that has access to the inventory source group.  If an inventory source group is partner-owned, only advertisers to which the group is explicitly shared can access the group.
    advertiserId: 'placeholder-value',
    // Allows filtering by inventory source group properties.  Supported syntax:  * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields:     - `inventorySourceGroupId`  The length of this field should be no more than 500 characters.
    filter: 'placeholder-value',
    // Field by which to sort the list. Acceptable values are:  * `displayName` (default) * `inventorySourceGroupId`  The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
    orderBy: 'placeholder-value',
    // Requested page size. Must be between `1` and `100`. If unspecified will default to `100`.
    pageSize: 'placeholder-value',
    // A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInventorySources` method. If not specified, the first page of results will be returned.
    pageToken: 'placeholder-value',
    // The ID of the partner that has access to the inventory source group.  A partner cannot access advertiser-owned inventory source groups.
    partnerId: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
