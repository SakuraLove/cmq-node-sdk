import {CommonResponse} from "../common-response";
import {SendMessageResponse} from "./send-message-response";

export interface BatchSendMessageResponse extends CommonResponse {
    /**
     * 服务器生成消息的唯一标识 ID 列表，每个元素是一条消息的信息。
     */
    msgList: SendMessageResponse[];
}
