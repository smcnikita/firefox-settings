// Общее количество правил: 43

/*
-----
Телеметрия (17 правил)
-----
*/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/*
-----
Исследования (3 правила)
-----
*/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/*
-----
Отчеты о сбоях (3 правила)
-----
*/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

/*
-----
Пользовательские стили (1 правило)
-----
*/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

/*
-----
Новая вкладка (4 правила)
-----
*/
user_pref("browser.newtabpage.activity-stream.newtabShortcuts.refresh", true);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

/*
-----
Pocket (1 правило)
-----
*/
user_pref("extensions.pocket.enabled", false);

/*
-----
Полноэкранный режим (7 правил)
-----
*/
user_pref("full-screen-api.macos-native-full-screen", false);
user_pref("full-screen-api.allow-trusted-requests-only", true);
user_pref("full-screen-api.transition-duration.enter", "10 10");
user_pref("full-screen-api.transition-duration.leave", "10 10");
user_pref("full-screen-api.warning.timeout", 0);
user_pref("full-screen-api.transition.timeout", 0);
user_pref("full-screen-api.warning.delay", 0);

/*
-----
Поисковая система (1 правило)
-----
*/
user_pref("browser.urlbar.update2.engineAliasRefresh", true);

/*
-----
Вкладки (5 правила)
-----
*/
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.hoverPreview.enabled", false);
user_pref("browser.tabs.hoverPreview.showThumbnails", false);
user_pref("browser.tabs.allowTabDetach", false);
user_pref("browser.tabs.firefox-view.ui-state.syncedtabs.open", false);

/*
-----
Панель инструментов (1 правило)
-----
*/
user_pref("browser.chrome.toolbar_tips", false);
