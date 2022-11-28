import { RoutesError } from "../../Error";

const CURRENT_VERSION:number = 10;
const LOWEST_SUPPORTED_VERSION:number = 10;

export class Routes {
    static version:number = CURRENT_VERSION;
    static baseURL:string = "https://discord.com/api";
    static API_URL:string = `${this.baseURL}/v${this.version}`;

    static setVersion(version:number) {
        if (version < LOWEST_SUPPORTED_VERSION || version > CURRENT_VERSION) new RoutesError(`Invalid API version: '${version}'`);
        else {
            this.version = version;
            this.API_URL = `${this.baseURL}/v${this.version}`;
        }
    }


    //#region Oauth2
    static currentBotApplicationInformation() {
        return `${this.API_URL}/oauth2/applications/@me`;
    }

    static currentBotAuthorizationInformation() {
        return `${this.API_URL}/oauth2/@me`;
    }
    //#endregion

    //#region Gateway
    static gateway() {
        return `${this.API_URL}/gateway`;
    }

    static gatewayBot() {
        return `${this.API_URL}/gateway/bot`;
    }
    //#endregion

    //#region Application
    static applicationCommands(applicationId:string) {
        return `${this.API_URL}/applications/${applicationId}/commands`;
    }

    static applicationCommand(applicationId:string, commandId:string) {
        return `${this.API_URL}/applications/${applicationId}/commands/${commandId}`;
    }

    static guildApplicationCommands(applicationId:string, guildId:string) {
        return `${this.API_URL}/applications/${applicationId}/guilds/${guildId}/commands`;
    }

    static guildApplicationCommand(applicationId:string, guildId:string, commandId:string) {
        return `${this.API_URL}/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`;
    }

    static guildApplicationCommandsPermissions(applicationId:string, guildId:string) {
        return `${this.API_URL}/applications/${applicationId}/guilds/${guildId}/commands/permissions`;
    }

    static guildApplicationCommandPermissions(applicationId:string, guildId:string, commandId:string) {
        return `${this.API_URL}/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`;
    }
    //#endregion

    //#region Interaction
    static interactionResponse(interactionId:string, interactionToken:string) {
        return `${this.API_URL}/interactions/${interactionId}/${interactionToken}/callback`;
    }

    static originalInteractionResponse(applicationId:string, interactionToken:string) {
        return `${this.API_URL}/webhooks/${applicationId}/${interactionToken}/messages/@original`;
    }

    static interactionFollowUpMessages(applicationId:string, interactionToken:string) {
        return `${this.API_URL}/interactions/${applicationId}/${interactionToken}`;
    }

    static interactionFollowUpMessage(applicationId:string, interactionToken:string, messageId:string) {
        return `${this.API_URL}/interactions/${applicationId}/${interactionToken}/messages/${messageId}`;
    }
    //#endregion

    //#region Guild
    static guild(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}`;
    }

    static guildPreview(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}`;
    }

    static guildChannels(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/channels`;
    }

    static guildThreads(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/channels`;
    }

    static guildMember(guildId:string, userId:string) {
        return `${this.API_URL}/guilds/${guildId}/members/${userId}`;
    }

    static guildMembers(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/members`;
    }

    static searchGuildMember(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/members/search`;
    }

    static currentMember(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/members/@me`;
    }

    /** Deprecated */
    static currentUserNick(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/members/@me/nick`;
    }

    static guildMemberRole(guildId:string, userId:string, roleId:string) {
        return `${this.API_URL}/guilds/${guildId}/members/${userId}/roles/${roleId}`;
    }
    static guildBans(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/bans`;
    }

    static guildBan(guildId:string, userId:string) {
        return `${this.API_URL}/guilds/${guildId}/bans/${userId}`;
    }

    static guildRoles(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/roles`;
    }

    static guildRole(guildId:string, roleId:string) {
        return `${this.API_URL}/guilds/${guildId}/roles/${roleId}`;
    }

    static guildMFALevel(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/mfa`;
    }

    static guildPrune(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/prune`;
    }

    static guildVoiceRegions(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/regions`;
    }

    static guildInvites(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/invites`;
    }

    static guildIntegrations(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/integrations`;
    }

    static guildIntegration(guildId:string, integrationId:string) {
        return `${this.API_URL}/guilds/${guildId}/integrations/${integrationId}`;
    }

    static guildWidget(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/widget.json`;
    }

    static guildWidgetSetting(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/widget`;
    }

    static guildWidgetImage(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/widget.png`;
    }

    static guildVanityURL(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/vanity-url`;
    }

    static guildWelcomeScreen(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/welcome-screen`;
    }

    static guildAuditLog(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/audit-logs`;
    }

    static currentUserVoiceState(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/voice-states/@me`;
    }
    
    static userVoiceState(guildId:string, userId:string) {
        return `${this.API_URL}/guilds/${guildId}/voice-states/${userId}`;
    }

    static autoModerationRules(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/auto-moderation/rules`;
    }

    static autoModerationRule(guildId:string, autoModerationRuleId:string) {
        return `${this.API_URL}/guilds/${guildId}/auto-moderation/rules/${autoModerationRuleId}`;
    }

    static guildEmojis(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/emojis`;
    }

    static guildEmoji(guildId:string, emojiId:string) {
        return `${this.API_URL}/guilds/${guildId}/emojis/${emojiId}`;
    }

    static guildScheduledEvents(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/scheduled-events`;
    }

    static guildScheduledEvent(guildId:string, guildScheduledEventId:string) {
        return `${this.API_URL}/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`;
    }

    static guildScheduledEventUsers(guildId:string, guildScheduledEventId:string) {
        return `${this.API_URL}/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/users`;
    }

    static template(templateCode:string) {
        return `${this.API_URL}/guilds/templates/${templateCode}`;
    }

    static guildTemplates(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/templates/`;
    }

    static guildTemplate(guildId:string, templateCode:string) {
        return `${this.API_URL}/guilds/${guildId}/templates/${templateCode}`;
    }
    //#endregion

    //#region Channel
    static channel(channelId:string) {
        return `${this.API_URL}/channels/${channelId}`;
    }

    static channelMessages(channelId:string) {
        return `${this.API_URL}/channels/${channelId}/messages`;
    }

    static channelMessage(channelId:string, messageId:string) {
        return `${this.API_URL}/channels/${channelId}/messages/${messageId}`;
    }

    static channelCrosspostMessage(channelId:string, messageId:string) {
        return `${this.API_URL}/channels/${channelId}/messages/${messageId}/crosspost`;
    }

    static channelMessageAllReactions(channelId:string, messageId:string) {
        return `${this.API_URL}/channels/${channelId}/messages/${messageId}/reactions`;
    }

    static channelMessageReactions(channelId:string, messageId:string, emoji:string) {
        return `${this.API_URL}/channels/${channelId}/messages/${messageId}/reactions/${emoji}`;
    }

    static channelMessageCurrentUserReaction(channelId:string, messageId:string, emoji:string) {
        return `${this.API_URL}/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me`;
    }

    static channelMessageUserReaction(channelId:string, messageId:string, emoji:string, userId:string) {
        return `${this.API_URL}/channels/${channelId}/messages/${messageId}/reactions/${emoji}/${userId}`;
    }

    static channelBulkDeleteMessages(channelId:string) {
        return `${this.API_URL}/channels/${channelId}/messages/bulk-delete`;
    }

    static channelPermission(channelId:string, overwriteId:string) {
        return `${this.API_URL}/channels/${channelId}/permissions/${overwriteId}`;
    }

    static channelInvites(channelId:string) {
        return `${this.API_URL}/channels/${channelId}/invites`;
    }

    static channelAnnouncement(channelId:string) {
        return `${this.API_URL}/channels/${channelId}/followers`;
    }

    static channelTypingIndicator(channelId:string) {
        return `${this.API_URL}/channels/${channelId}/typing`;
    }

    static channelPinMessages(channelId:string) {
        return `${this.API_URL}/channels/${channelId}/pins`;
    }

    static channelPinMessage(channelId:string, messageId:string) {
        return `${this.API_URL}/channels/${channelId}/pins/${messageId}`;
    }

    static channelGroupDM(channelId:string, userId:string) {
        return `${this.API_URL}/channels/${channelId}/recipients/${userId}`;
    }

    static channelThreadFromMessage(channelId:string, messageId:string) {
        return `${this.API_URL}/channels/${channelId}/messages/${messageId}/threads`;
    }

    static channelThread(channelId:string) {
        return `${this.API_URL}/channels/${channelId}/threads`;
    }

    static channelThreadUsers(channelId:string) {
        return `${this.API_URL}/channels/${channelId}/thread-members`;
    }

    static channelThreadcurrentUser(channelId:string) {
        return `${this.API_URL}/channels/${channelId}/thread-members/@me`;
    }

    static channelThreadUser(channelId:string, userId:string) {
        return `${this.API_URL}/channels/${channelId}/thread-members/${userId}`;
    }

    static channelPublicArchivedThreads(channelId:string) {
        return `${this.API_URL}/channels/${channelId}/threads/archived/public`;
    }

    static channelPrivateArchivedThreads(channelId:string) {
        return `${this.API_URL}/channels/${channelId}/threads/archived/private`;
    }

    static channelPrivateArchivedThreadsCurrentUser(channelId:string) {
        return `${this.API_URL}/channels/${channelId}/users/@me/threads/archived/private`;
    }
    //#endregion

    //#region Invite
    static invite(inviteCode:string) {
        return `${this.API_URL}/invites/${inviteCode}`;
    }
    //#endregion

    //#region Stage Instance
    static stageInstances() {
        return `${this.API_URL}/stage-instances`;
    }

    static stageInstance(channelId:string) {
        return `${this.API_URL}/stage-instances/${channelId}`;
    }
    //#endregion

    //#region Sticker
    static sticker(stickerId:string) {
        return `${this.API_URL}/stickers/${stickerId}`;
    }

    static stickerPacks() {
        return `${this.API_URL}/sticker-packs`;
    }

    static guildStickers(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/stickers`;
    }

    static guildSticker(guildId:string, stickerId:string) {
        return `${this.API_URL}/guilds/${guildId}/stickers/${stickerId}`;
    }
    //#endregion

    //#region User
    static currentUser() {
        return `${this.API_URL}/users/@me`;
    }

    static user(userId:string) {
        return `${this.API_URL}/users/${userId}`;
    }

    static currentUserGuilds() {
        return `${this.API_URL}/users/@me/guilds`;
    }

    static currentUserGuild(guildId:string) {
        return `${this.API_URL}/users/@me/guilds/${guildId}`;
    }

    static currentUserGuildMember(guildId:string) {
        return `${this.API_URL}/users/@me/guilds/${guildId}/member`;
    }

    static userDM() {
        return `${this.API_URL}/users/@me/channels`;
    }

    static userConnections() {
        return `${this.API_URL}/users/@me/connections`;
    }
    //#endregion

    //#region Voice
    static voiceRegions() {
        return `${this.API_URL}/voice/regions`;
    } 
    //#endregion

    //#region Webhook
    static webhook(webhookId:string) {
        return `${this.API_URL}/webhooks/${webhookId}`;
    }

    static channelWebhooks(channelId:string) {
        return `${this.API_URL}/channels/${channelId}/webhooks`;
    }

    static guildWebhooks(guildId:string) {
        return `${this.API_URL}/guilds/${guildId}/webhooks`;
    }

    static webhookWithToken(webhookId:string, webhookToken:string) {
        return `${this.API_URL}/webhooks/${webhookId}/${webhookToken}`;
    }

    static webhookSlackCompatible(webhookId:string, webhookToken:string) {
        return `${this.API_URL}/webhooks/${webhookId}/${webhookToken}/slack`;
    }

    static webhookGitHubCompatible(webhookId:string, webhookToken:string) {
        return `${this.API_URL}/webhooks/${webhookId}/${webhookToken}/github`;
    }

    static webhookMessage(webhookId:string, webhookToken:string, messageId:string) {
        return `${this.API_URL}/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`;
    }
    //#endregion
}