'use strict';

module.exports = {
  title: 'Befehlsverwendung',
  titleError: 'Fehler :warning:',
  titleComp: 'Fertig :white_check_mark:',
  unknownChannel: 'Unbekannter Kanal.',
  unknownRole: 'Unbekannte Rolle.',
  unknownMessage: 'Unbekannte Nachricht.',
  unknownEmoji: 'Unbekannter Emoji.',
  noChannel: ['Bitte gib zuerst einen Kanal mit **', 'channel** an.'],
  noMessage: ['Bitte gib zuerst eine Nachricht mit **', 'message** an.'],
  help: {
    commandsTitle: 'Befehle',
    commands: {
      channel: 'Zu benutzenden Kanal einstellen\n',
      message: 'Zu benutzende Nachricht einstellen\n',
      add: 'Füge eine Rolle mit Emoji hinzu\n',
      toggle: 'Füge eine einstellbare Rolle hinzu\n',
      remove: 'Entferne eine eingestellte Rolle\n',
      edit: 'Ändere eine von Zira gesendete Nachricht\n',
      list: 'Liste die verwendeten Rollen  auf\n',
      autorole: 'Gib Nutzern und Bots eine Rolle beim Serevrbeitritt\n',
      log: 'Protokollieren wenn Zira eine Rolle gibt/nimmt\n',
      join: 'Sende eine Nachricht wenn ein Nutzer beitritt\n',
      leave: 'Sende eine Nachricht wenn ein Nutzer geht\n',
      lang: 'Sprache einstellen\n',
      reset: 'Servereinstellungen zurücksetzen\n',
      info: 'Infos über Zira\n',
      faq: 'Oft gefragte Fragen\n',
      ping: 'Zira\'s ping\n',
      invite: 'Zira einladen\n',
      suggestion: 'Kanal für Vorschläge einstellen\n',
      submit: 'Vorschlag einreichen\n',
      approve: 'Vorschlag als bestätigt markieren\n',
      maybe: 'Vorschlag als eventuell bestätigt markieren\n',
      deny: 'Vorschlag als abgelehnt markieren\n',
      once: 'Füge eine Rolle hinzu, die nur einmal vergeben werden kann\n',
      calc: 'Rechner\n',
      purge: 'Lösche bis zu 100 Nachrichten\n',
    },
    categories: {
      role: 'Rollen',
      logs: 'Protokolle',
      suggestion: 'Vorschläge',
      misc: 'Verschiedenes',
    },
    linksTitle: 'Links',
    links: '[Anleitung zum Einrichten von Zira](https://demo.zira.pw)\n[Hilfserver](https://zira.pw/support)\n[Zira\'s Dashboard](https://zira.pw)\n[Spenden um Zira aufrecht zu erhalten](https://www.patreon.com/HazedSPaCEx)\n[Zira übersetzen](https://github.com/HazedSPaCEx/Zira-Translations)',
    news: 'Neuigkeiten',
  },
  channel: {
    help: 'channel #channel** ~~-~~ Zu verwendenden Kanal einstellen',
    set: 'Kanal gestellt auf <#',
  },
  message: {
    help: 'message [[message ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) | message]** ~~-~~ Verwende eine existierende Nachricht, oder erstelle eine neue.',
    cannotSend: ['Konnte keine Nachricht in <#', '> senden, weil mir die `Nachrichten senden` Berechtigung fehlt.'],
    cannotRead: ['Konnte keine Nachricht in <#', '> senden, weil mir die `Nachrichten lesen` oder `Nachrichtenverlauf lesen` Berechtigung fehlt.'],
    unknown: 'Konnte keine Nachricht senden.',
    cannotReadID: ['Konnte die Nachricht mit <#', '> nicht finden, weil mir die `Nachrichten lesen` oder `Nachrichtenverlauf lesen` Berechtigung fehlt.'],
    unknownID: 'Konnte Nachrichten-ID nicht setzen',
    set: 'Nachricht mit dieser ID gesetzt: ',
  },
  add: {
    help: 'add [emoji] [@role | role name]** ~~-~~ Füge eine Rolle mit Emoji zu deiner Nachricht hinzu',
    cannotRead: ['Konnte nicht auf die Nachricht in <#', '> reagieren, weil mir die `Nachrichten lesen` oder `Nachrichtenverlauf lesen` Berechtigung fehlt.'],
    cannotReact: ['Konnte nicht auf die Nachricht in <#', '> reagieren, weil mir die `Nachrichten lesen` oder `Nachrichtenverlauf lesen` Berechtigung fehlt.'],
    unknown: 'Konnte auf die Nachricht im folgenden Kanal nicht reagieren: <#',
    set: ['<@&', '> hinzugefügt mit Emoji ', '\n\n**NOTIZ:** Die `Zira` Rolle muss über der Rolle die du setzen willst stehen, und muss die `Rollen verwalten` Berechtigung haben.'],
    emoji: 'Dieser Emoji wird auf der Nachricht bereits verwendet.',
    role: 'Diese Rolle wird auf der Nachricht bereits verwendet.',
  },
  toggle: {
    help: 'toggle [emoji] [@role | role name]** ~~-~~ Füge eine Rolle mit Emoji zur gesetzten Nachricht hinzu.',
    image: 'https://stuff.zira.pw/files/1524932965273.gif', /* I will replace this with a gif that is fast as my internet and laptop is slow */
  },
  perm: {
    noPerm: 'Du must Besitzer des Servers sein, oder die `Rollen verwalten` Berechtigung haben, um diesen Befehl zu verwenden.',
    noLangPerm: 'Du musst Besitzer des Servers sein, oder die `Server verwalten` Berechtigung haben, um die Sprache des Bots zu ändern',
    noMessagePerm: 'Du musst Besitzer des Servers sein, oder die `Nachrichten verwalten` Berechtigung haben, um Nachrichten zu löschen',
    noGuildPerm: 'Du musst Besitzer des Servers sein, oder die `Server verwalten` Berechtigung haben um diesen Befehl zu verwenden.',
  },
  lang: {
    langUpdate: 'Sprache geändert.',
    translate: 'Wenn du Zira in einer Sprache verwenden möchtest, die nicht auf der Liste steht, hilf [hier](https://github.com/HazedSPaCEx/Zira-Translations) beim übersetzen.',
  },
  log: {
    title: 'Protokollbefehl',
    help: ['log #channel** ~~-~~ Kanal für Protokolle einstellen\n\nUm das protokollieren zu beenden, verwende **', 'log stop**\n\nUnten steht eine Beispielnachricht.'],
    set: ['Protokolle gestzt auf <#', '>\n\n**NOTIZ:** Falls Zira in diesem Kanal nicht senden kann, werden Protokolle deaktiviert.'],
    stop: 'Es werden keine Protokolle mehr gesendet.',
    image: 'https://stuff.zira.pw/files/logExample.png',
    give: [' reagierte ', ' und erhielt '],
    remove: [' ent-reagierte ', ' und entfernte '],
  },
  faq: {
    title: 'Oft gefragte Fragen',
    fields: [{
      name: 'Wie bekomme ich die Nachrichten ID?',
      value: 'Auf dem PC, stelle sicher dass du den Entwicklermodus unter Benutzereinstellungen --> Erscheinungsbild aktiviert hast. Sobald das aktiviert ist, rechtsklicke auf die Nachricht, und klicke dann auf ID kopieren.\n\nAuf Android, stelle sicher dass der Entwicklermodus unter Benutzereinstellungen --> Verhalten aktiviert ist. Halte dann deine Nachricht gedrückt, und drücke dann im Menü auf ID kopieren.\n\niOS wird dieses Feature aufgrund der Systemeinschränkungen niemals haben.',
    }, {
      name: 'Zira sendet nach keinem meiner Befehle Nachrichten, was soll ich tun?',
      value: 'Stelle sicher dass Zira in dem Kanal die Berechtigung hat, Nachrichten zu senden.',
    }, {
      name: 'Zira sagt `"Konnte keine Nachricht mit dieser ID finden"` oder `"Unbekannte Nachrichten ID"`, was soll ich tun?',
      value: 'Stelle sicher dass die Nachricht im von dir gesetzten Kanal ist, und dass Zira in diesem Kanal lesen kann.',
    }, {
      name: 'Obwohl ich alles richtig eingestellt habe vergibt Zira keine Rollen.',
      value: 'Stelle sicher dass Zira die "Rollen verwalten" Berechtigung hat, und dass Zira über der von dir gesetzten Rolle steht.',
    }, {
      name: 'Kann Zira Emojis entfernen, die keine dazugehörige Rolle haben?',
      value: 'Ja, aber dafür braucht Zira die "Nachrichten verwalten" Berechtigung im verwendeten Kanal haben.',
    }, {
      name: 'Kann Zira mehr als eine Nachricht benutzen?',
      value: 'Ja, setze einfach eine neue Nachricht, und füge dann Rollen hinzu.',
    }, {
      name: 'Kann Zira mehr als einen Kanal benutzen?',
      value: 'Ja, stelle einfach einen neuen Kanal ein, dann die Nachricht usw.',
    }, {
      name: 'Wie viele Rollen sind pro Nachricht erlaubt?',
      value: 'Da Discord nur 20 Emojis pro Nachricht erlaubt, sind es 20 Rollen.',
    }],
  },
  join: {
    title: 'Join Befehl',
    help: ['join channel** ~~-~~ Setze den Kanal in dem Nachrichten gesendet werden\n**', 'join message** ~~-~~ Setze die Nachricht die beim Beitritt eines Nutzers gesendet wird\n\nDu kannst die folgenden Platzhalter verwenden:\n$user ~~-~~ Nutzername\n$mention ~~-~~ Nutzerping\n$guild ~~-~~ Servername\n$membercount ~~-~~ Mitgliederanzahl'],
    channel: ['join channel #channel** ~~-~~ Setze den Kanal in dem Beitrittsnachrichten gesendet werden\n\nUm die Nachrichten zu stoppen, verwende **', 'join channel stop**'],
    stop: 'Es werden keine Nachrichten mehr gesendet',
    setChannel: ['Kanal gesetzt auf <#', '>\n\n**NOTIZ:** Wenn Zira keine Nachrichten in diesem Kanal senden kann, werden die Benachrichtigungen deaktiviert.'],
    message: 'join message [message]** ~~-~~ Setze die Nachricht die bei neuen Nutzern gesendet wird\n\nDu kannst die folgenden Platzhalter verwenden:\n$user ~~-~~ Nutzername\n$mention ~~-~~ Nutzerping\n$guild ~~-~~ Servername\n$membercount ~~-~~ Mitgliederanzahl',
    setMessage: 'Beitrittsnachricht gesetzt:\n',
  },
  leave: {
    title: 'Leave Befehl',
    help: ['leave channel** ~~-~~ Setze den Kanal in dem Nachrichten gesendet werden\n**', 'leave message** ~~-~~ Setze die Nachricht die beim Verlassens eines Nutzers gesendet wird\n\nDu kannst die folgenden Platzhalter verwenden:\n$user ~~-~~ Nutzername\n$mention ~~-~~ Nutzerping\n$guild ~~-~~ Servername\n$membercount ~~-~~ Mitgliederanzahl'],
    channel: ['leave channel #channel** ~~-~~ Setze den Kanal in dem Verlassensnachrichten gesendet werden\n\nUm die Nachrichten zu stoppen, verwende **', 'leave channel stop**'],
    stop: 'Es werden keine Nachrichten mehr gesendet.',
    setChannel: ['Kanal gesetzt auf <#', '>\n\n**NOTIZ:** Wenn Zira keine Nachrichten in diesem Kanal senden kann, werden die Benachrichtigungen deaktiviert.'],
    message: 'leave message [message]** ~~-~~ Setze die Nachricht die bei verlassenden Nutzern gesendet wird\n\nDu kannst die folgenden Platzhalter verwenden:\n$user ~~-~~ Nutzername\n$mention ~~-~~ Nutzerping\n$guild ~~-~~ Servername\n$membercount ~~-~~ Mitgliederanzahl',
    setMessage: 'Verlassensnachricht gesetzt:\n',
  },
  auto: {
    title: 'Automatische Rollen',
    help: ['autorole show** ~~-~~ Zeige die momentan gesetzten Rollen\n**', 'autorole user** ~~-~~ Bearbeite die Rollen die neuen Nutzern gegeben werden\n**', 'autorole bot** ~~-~~ Bearbeite die Rollen die neuen Bots gegeben werden'],
    user: 'autorole user [@role | role name]** ~~-~~ Bearbeite eine Rolle die neuen Nutzern gegeben wird\n\nUm eine gesetzte Rolle zu entfernen, verwende den vorherigen Befehl',
    userAdd: ['Rolle <@&', '> wird neuen Nutzern gegeben.\n\n**NOTIZ:** Die `Zira` Rolle muss über der gesetzten Rolle stehen, und braucht die `Rollen verwalten` Berechtigung um die Rolle zu vergeben.'],
    userRemove: ['Rolle <@&', '> wird neuen Nutzern nicht mehr gegeben.'],
    botAdd: ['Rolle <@&', '> wird neuen Bots gegeben.\n\n**NOTIZ:** Die `Zira` Rolle muss über der gesetzten Rolle stehen, und braucht die `Rollen verwalten` Berechtigung um die Rolle zu vergeben.'],
    botRemove: ['Rolle <@&', '> wird neuen Bots nicht mehr gegeben.'],
    bot: 'autorole bot [@role | role name]** ~~-~~ Bearbeite eine Rolle die neuen Bots gegeben wird\n\nUm eine gesetzte Rolle zu entfernen, verwende den vorherigen Befehl.',
    showUser: 'Nutzerrollen',
    showBot: 'Botrollen',
    no: 'Keine Rollen gesetzt.',
  },
  reset: {
    title: 'Konfiguration zurücksetzen :warning:',
    question: 'Bist du sicher dass du die Serverkonfiguration zurücksetzen willst?\n**Alles** was in Zira eingestellt wurde wird gelöscht.\n\nSchreibe `yes` (ja) oder `no` (nein)',
    yes: 'Serverkonfiguration wurde zurückgestzt.',
    no: 'Nichts wurde zurückgesetzt.',
    perm: 'Nur der Besitzer des Servers kann die Einstellungen zurücksetzen.',
  },
  list: {
    title: ' Rollen Liste',
    cont: 'Liste fortgesetzt',
    null: 'Wenn eine Nachrichten ID "null" ist, Setze entweder die Konfiguration zurück und lies die Rollen, oder tritt dem [Hilfserver](https://zira.pw/support) bei.',
    noTitle: 'OwO',
    noDesc: 'Was ist das?',
  },
  remove: {
    help: ['remove [[Nachrichts-ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [@role | role name]** ~~-~~ Entferne eine Rolle die mit Zira eingerichtet wurde\n\nUm die Nachrichts-ID einer Nachricht mit Rollen zu erhalten, verwende **', 'list**.'],
    setup: 'Konnte die Rolle nicht entfernen da sie entweder nicht mit Zira eingerichtet wurde, oder nicht mit auf der angegebenen Nachricht ist.',
    removed: ['<@&', '> mit folgendem Emoji entfernt '],
  },
  edit: {
    help: 'edit [[Nachrichts-ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [Neue Nachricht]** ~~-~~ Bearbeite eine Nachricht von Zira',
    read: ['Konnte keine Nachricht in <#', '> finden, weil mir die `Nachrichten lesen` oder `Nachrichtsenverlauf lesen` Berechtigung fehlt.'],
    unknownGet: 'Konnte diese Nachricht nicht im hier finden: <#',
    unknownEdit: 'Konnte die Nachricht nicht bearbeiten.',
    no: 'Diese Nachricht kann nicht bearbeitet werden, da sie nicht von Zira gesendet wurde.',
    edited: 'Nachricht wurde bearbeitet.',
  },
  suggestion: {
    help: ['suggestion #channel** ~~-~~ set a channel that suggestions will be sent to\nIf you want to only allow suggestions to be submitted in one channel, do **', 'suggestion [#suggestion channel] [#submit channel]**\n\nTo disable suggestions, do **', 'suggestion stop**'],
    set: ['Suggestion channel set to <#', '>\n\n**NOTE:** If Zira is not able to send messages to the channel, suggestions will be disabled.'],
    setsubmit: ['Suggestion channel set to <#', '> and suggestions can only be submitted in <#', '>\n\n**NOTE:** If Zira is not able to send messages to the channel, suggestions will be disabled.'],
    stop: 'Suggestions are now disabled.',
    disable: 'Suggestions are disabled.',
    notSetup: 'That message is not a suggestion sent by Zira.',
    reason: 'Reason',
    useChannel: ['Use the channel <#', '> to submit a suggestion.'],
    noReason: 'No reason was provided.',
  },
  submit: {
    help: 'submit [suggestion]** ~~-~~ submit your wonderful suggestion',
    title: 'New Suggestion',
  },
  approve: {
    help: 'approve [[message ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [reason]** ~~-~~ approve a suggestion',
    read: ['Unable to approve the suggestion in <#', '> because I lack the `Read Messages` or `Read Message History` permissions.'],
    title: 'Approved Suggestion',
    reason: 'Reason',
    unknown: 'Unable to approve suggestion.',
  },
  deny: {
    help: 'deny [[message ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [reason]** ~~-~~ deny a suggestion',
    read: ['Unable to deny the suggestion in <#', '> because I lack the `Read Messages` or `Read Message History` permissions.'],
    title: 'Denied Suggestion',
    unknown: 'Unable to deny suggestion.',
  },
  maybe: {
    help: 'maybe [[message ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [reason]** ~~-~~ potentially approve a suggestion',
    read: ['Unable to potentially approve the suggestion in <#', '> because I lack the `Read Messages` or `Read Message History` permissions.'],
    title: 'Potential Suggestion',
    unknown: 'Unable to potentially approve suggestion.',
  },
  once: {
    help: 'once [emoji] [@role | role name]** ~~-~~ add a role with an emoji that can only be claimed once to the set message\n\nThis is useful for accepting guild rules, etc.',
    cannotRead: ['Unable to react to the message in <#', '> because I lack the `Read Messages` or `Read Message History` permissions.'],
    cannotReact: ['Unable to react to the message in <#', '> because I lack the `Add Reaction` permission.'],
    unknown: 'Unable to react to the message in <#',
    set: ['<@&', '> added with the emoji ', '\n\n**NOTE:** The `Zira` role needs to be above the role you\'ve set, and needs to have `Manage Roles` permission to give this role.'],
    emoji: 'That emoji is already in use on this message.',
    role: 'That role is already in use on this message.',
  },
  purge: {
    amount: 'You didn\'t input an amount of messages.',
    wrongAmount: 'The amount of messages can only be between 2 - 100.',
    error: 'Couldn\'t purge messages.',
  },

};
