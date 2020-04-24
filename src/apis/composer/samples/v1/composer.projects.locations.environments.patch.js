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
const composer = google.composer('v1');

/*
 * Update an environment.
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
  const res = await composer.projects.locations.environments.patch({
    // The relative resource name of the environment to update, in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
    name: 'projects/my-project/locations/my-location/environments/[^/]+',
    // Required. A comma-separated list of paths, relative to `Environment`, of fields to update. For example, to set the version of scikit-learn to install in the environment to 0.19.0 and to remove an existing installation of numpy, the `updateMask` parameter would include the following two `paths` values: "config.softwareConfig.pypiPackages.scikit-learn" and "config.softwareConfig.pypiPackages.numpy". The included patch environment would specify the scikit-learn version as follows:      {       "config":{         "softwareConfig":{           "pypiPackages":{             "scikit-learn":"==0.19.0"           }         }       }     }  Note that in the above example, any existing PyPI packages other than scikit-learn and numpy will be unaffected.  Only one update type may be included in a single request's `updateMask`. For example, one cannot update both the PyPI packages and labels in the same request. However, it is possible to update multiple members of a map field simultaneously in the same request. For example, to set the labels "label1" and "label2" while clearing "label3" (assuming it already exists), one can provide the paths "labels.label1", "labels.label2", and "labels.label3" and populate the patch environment as follows:      {       "labels":{         "label1":"new-label1-value"         "label2":"new-label2-value"       }     }  Note that in the above example, any existing labels that are not included in the `updateMask` will be unaffected.  It is also possible to replace an entire map field by providing the map field's path in the `updateMask`. The new value of the field will be that which is provided in the patch environment. For example, to delete all pre-existing user-specified PyPI packages and install botocore at version 1.7.14, the `updateMask` would contain the path "config.softwareConfig.pypiPackages", and the patch environment would be the following:      {       "config":{         "softwareConfig":{           "pypiPackages":{             "botocore":"==1.7.14"           }         }       }     }  **Note:** Only the following fields can be updated:   <table>  <tbody>  <tr>  <td><strong>Mask</strong></td>  <td><strong>Purpose</strong></td>  </tr>  <tr>  <td>config.softwareConfig.pypiPackages  </td>  <td>Replace all custom custom PyPI packages. If a replacement  package map is not included in `environment`, all custom  PyPI packages are cleared. It is an error to provide both this mask and a  mask specifying an individual package.</td>  </tr>  <tr>  <td>config.softwareConfig.pypiPackages.<var>packagename</var></td>  <td>Update the custom PyPI package <var>packagename</var>,  preserving other packages. To delete the package, include it in  `updateMask`, and omit the mapping for it in  `environment.config.softwareConfig.pypiPackages`. It is an error  to provide both a mask of this form and the  "config.softwareConfig.pypiPackages" mask.</td>  </tr>  <tr>  <td>labels</td>  <td>Replace all environment labels. If a replacement labels map is not  included in `environment`, all labels are cleared. It is an error to  provide both this mask and a mask specifying one or more individual  labels.</td>  </tr>  <tr>  <td>labels.<var>labelName</var></td>  <td>Set the label named <var>labelName</var>, while preserving other  labels. To delete the label, include it in `updateMask` and omit its  mapping in `environment.labels`. It is an error to provide both a  mask of this form and the "labels" mask.</td>  </tr>  <tr>  <td>config.nodeCount</td>  <td>Horizontally scale the number of nodes in the environment. An integer  greater than or equal to 3 must be provided in the `config.nodeCount`  field.  </td>  </tr>  <tr>  <td>config.softwareConfig.airflowConfigOverrides</td>  <td>Replace all Apache Airflow config overrides. If a replacement config  overrides map is not included in `environment`, all config overrides  are cleared.  It is an error to provide both this mask and a mask specifying one or  more individual config overrides.</td>  </tr>  <tr>  <td>config.softwareConfig.airflowConfigOverrides.<var>section</var>-<var>name  </var></td>  <td>Override the Apache Airflow config property <var>name</var> in the  section named <var>section</var>, preserving other properties. To delete  the property override, include it in `updateMask` and omit its mapping  in `environment.config.softwareConfig.airflowConfigOverrides`.  It is an error to provide both a mask of this form and the  "config.softwareConfig.airflowConfigOverrides" mask.</td>  </tr>  <tr>  <td>config.softwareConfig.envVariables</td>  <td>Replace all environment variables. If a replacement environment  variable map is not included in `environment`, all custom environment  variables  are cleared.  It is an error to provide both this mask and a mask specifying one or  more individual environment variables.</td>  </tr>  </tbody>  </table>
    updateMask: 'placeholder-value',

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
