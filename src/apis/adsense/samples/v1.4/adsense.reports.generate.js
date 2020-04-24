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
const adsense = google.adsense('v1.4');

/*
 * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
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
      'https://www.googleapis.com/auth/adsense',
      'https://www.googleapis.com/auth/adsense.readonly',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await adsense.reports.generate({
    // Accounts upon which to report.
    accountId: 'placeholder-value',
    // Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
    currency: '[a-zA-Z]+',
    // Dimensions to base the report on.
    dimension: '[a-zA-Z_]+',
    // End of the date range to report on in "YYYY-MM-DD" format, inclusive.
    endDate:
      'd{4}-d{2}-d{2}|(today|startOfMonth|startOfYear)(([-+]d+[dwmy]){0,3}?)|(latest-(d{2})-(d{2})(-d+y)?)|(latest-latest-(d{2})(-d+m)?)',
    // Filters to be run on the report.
    filter: '[a-zA-Z_]+(==|=@).+',
    // Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
    locale: '[a-zA-Z_]+',
    // The maximum number of rows of report data to return.
    maxResults: 'placeholder-value',
    // Numeric columns to include in the report.
    metric: '[a-zA-Z_]+',
    // The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
    sort: '(+|-)?[a-zA-Z_]+',
    // Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
    startDate:
      'd{4}-d{2}-d{2}|(today|startOfMonth|startOfYear)(([-+]d+[dwmy]){0,3}?)|(latest-(d{2})-(d{2})(-d+y)?)|(latest-latest-(d{2})(-d+m)?)',
    // Index of the first row of report data to return.
    startIndex: 'placeholder-value',
    // Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.
    useTimezoneReporting: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
