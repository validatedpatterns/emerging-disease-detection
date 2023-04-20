// blank values are replaced at runtime by the set-config.js node script
(function(window) {
  window._env = window._env || {};

  window._env.KEYCLOAK_URL = "{{ .Values.sso_url }}.{{ .Values.global.hubClusterDomain }}";
  window._env.SSO_REALM = "{{ .Values.sso_realm_id }}";
  window._env.SSO_CLIENT = "{{ .Values.sso_clientId }}";
  window._env.KIE_SERVER_URL = "https://{{ .Values.sepsisdetection_rhpam_app_name }}-{{ .Values.project_name }}.{{ .Values.global.hubClusterDomain }}";
  window._env.KIE_SERVER_USERID = "kieserver";
  window._env.KIE_SERVER_PASSWORD = "{{ .Values.sepsisdetection_rhpam_api_passwd }}";
  window._env.DM_CONTAINER_ALIAS = "";
  window._env.PAM_CONTAINER_ALIAS = "{{ .Values.sepsisdetection_rhpam_deployment_name }}-{{ .Values.sepsisdetection_rhpam_deployment_version }}";
  window._env.PROCESS_ID = "{{ .Values.sepsisdetection_rhpam_process_id }}";

  // CORS is enabled only on the fhir context-path
  window._env.FHIR_SERVER_URL = "https://{{ .Values.fhir_server_application_name }}-{{ .Values.project_name }}.{{ .Values.global.hubClusterDomain }}/fhir";

  window._env.FHIR_SSE_STREAMING_URL = 'https://{{ .Values.sepsisdetection_sse_hostname }}-{{ .Values.project_name }}.{{ .Values.global.hubClusterDomain }}';

  window._env.PATIENT_VIEWER_URL = "{{ .Values.patient_viewer_url }}";
  window._env.IS_OPENSHIFT = "true";
})(this);
