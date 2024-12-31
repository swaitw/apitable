/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Message statistics
*/
export class NotificationStatisticsVo {
    /**
    * Number of messages read
    */
    'readCount'?: number;
    /**
    * Total number of messages
    */
    'totalCount'?: number;
    /**
    * Number of unread messages
    */
    'unReadCount'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "readCount",
            "baseName": "readCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "totalCount",
            "baseName": "totalCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "unReadCount",
            "baseName": "unReadCount",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return NotificationStatisticsVo.attributeTypeMap;
    }

    public constructor() {
    }
}

