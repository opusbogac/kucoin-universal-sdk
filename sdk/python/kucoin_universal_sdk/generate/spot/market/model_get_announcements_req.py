# coding: utf-8

# Code generated by Kucoin Universal SDK Generator; DO NOT EDIT.

from __future__ import annotations
import pprint
import json

from enum import Enum
from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List, Optional


class GetAnnouncementsReq(BaseModel):
    """
    GetAnnouncementsReq

    Attributes:
        current_page (int): page number
        page_size (int): page Size
        ann_type (AnnTypeEnum): Announcement types: latest-announcements , activities (latest activities), new-listings (new currency online), product-updates (product updates), vip (institutions and VIPs), maintenance-updates (system maintenance), product -updates (product news), delistings (currency offline), others, api-campaigns (API user activities), default : latest-announcements
        lang (LangEnum): Language type, the default is en_US, the specific value parameters are as follows
        start_time (int): Announcement online start time (milliseconds)
        end_time (int): Announcement online end time (milliseconds)
    """

    class AnnTypeEnum(Enum):
        """
        Attributes:
            LATEST_ANNOUNCEMENTS: latest-announcements
            ACTIVITIES: latest activities
            PRODUCT_UPDATES: product updates
            VIPS: institutions and VIPs
            MAINTENANCE_UPDATE: system maintenance
            DELISTINGS: currency offline
            OTHERS: others
            API_CAMPAIGNS: API user activities
            NEW_LISTINGS: new currency online
        """
        LATEST_ANNOUNCEMENTS = 'latest-announcements'
        ACTIVITIES = 'activities'
        PRODUCT_UPDATES = 'product-updates'
        VIPS = 'vip'
        MAINTENANCE_UPDATE = 'maintenance-updates'
        DELISTINGS = 'delistings'
        OTHERS = 'others'
        API_CAMPAIGNS = 'api-campaigns'
        NEW_LISTINGS = 'new-listings'

    class LangEnum(Enum):
        """
        Attributes:
            ZH_HK: Chinese (Hong Kong)
            JA_JP: Japanese (Japan)
            KO_KR: Korean (Korea)
            EN_US: English
            PL_PL: Polish (Poland)
            ES_ES: Spanish (Spain)
            FR_FR: French (France)
            AR_AE: Arabic (Egypt)
            IT_IT: Italian (Italy)
            ID_ID: Indonesian (Indonesia)
            NL_NL: Dutch (Netherlands)
            PT_PT: Portuguese (Brazil)
            VI_VN: Vietnamese (Vietnam)
            DE_DE: German (Germany)
            TR_TR: Turkish (Turkey)
            MS_MY: Malay (Malaysia)
            RU_RU: Russian (Russia)
            TH_TH: Thai (Thailand)
            HI_IN: Hindi (India)
            BN_BD: Bengali (Bangladesh)
            FIL_PH: Filipino (Philippines)
            UR_PK: Urdu (Pakistan)
        """
        ZH_HK = 'zh_HK'
        JA_JP = 'ja_JP'
        KO_KR = 'ko_KR'
        EN_US = 'en_US'
        PL_PL = 'pl_PL'
        ES_ES = 'es_ES'
        FR_FR = 'fr_FR'
        AR_AE = 'ar_AE'
        IT_IT = 'it_IT'
        ID_ID = 'id_ID'
        NL_NL = 'nl_NL'
        PT_PT = 'pt_PT'
        VI_VN = 'vi_VN'
        DE_DE = 'de_DE'
        TR_TR = 'tr_TR'
        MS_MY = 'ms_MY'
        RU_RU = 'ru_RU'
        TH_TH = 'th_TH'
        HI_IN = 'hi_IN'
        BN_BD = 'bn_BD'
        FIL_PH = 'fil_PH'
        UR_PK = 'ur_PK'

    current_page: Optional[int] = Field(default=None,
                                        description="page number",
                                        alias="currentPage")
    page_size: Optional[int] = Field(default=None,
                                     description="page Size",
                                     alias="pageSize")
    ann_type: Optional[AnnTypeEnum] = Field(
        default=AnnTypeEnum.LATEST_ANNOUNCEMENTS,
        description=
        "Announcement types: latest-announcements , activities (latest activities), new-listings (new currency online), product-updates (product updates), vip (institutions and VIPs), maintenance-updates (system maintenance), product -updates (product news), delistings (currency offline), others, api-campaigns (API user activities), default : latest-announcements",
        alias="annType")
    lang: Optional[LangEnum] = Field(
        default=LangEnum.EN_US,
        description=
        "Language type, the default is en_US, the specific value parameters are as follows"
    )
    start_time: Optional[int] = Field(
        default=None,
        description="Announcement online start time (milliseconds)",
        alias="startTime")
    end_time: Optional[int] = Field(
        default=None,
        description="Announcement online end time (milliseconds)",
        alias="endTime")

    __properties: ClassVar[List[str]] = [
        "currentPage", "pageSize", "annType", "lang", "startTime", "endTime"
    ]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=False,
        protected_namespaces=(),
    )

    def to_str(self) -> str:
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        return self.model_dump_json(by_alias=True, exclude_none=True)

    @classmethod
    def from_json(cls, json_str: str) -> Optional[GetAnnouncementsReq]:
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        _dict = self.model_dump(
            by_alias=True,
            exclude_none=True,
        )
        return _dict

    @classmethod
    def from_dict(
            cls, obj: Optional[Dict[str,
                                    Any]]) -> Optional[GetAnnouncementsReq]:
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "currentPage":
            obj.get("currentPage"),
            "pageSize":
            obj.get("pageSize"),
            "annType":
            obj.get("annType") if obj.get("annType") is not None else
            GetAnnouncementsReq.AnnTypeEnum.LATEST_ANNOUNCEMENTS,
            "lang":
            obj.get("lang") if obj.get("lang") is not None else
            GetAnnouncementsReq.LangEnum.EN_US,
            "startTime":
            obj.get("startTime"),
            "endTime":
            obj.get("endTime")
        })
        return _obj


class GetAnnouncementsReqBuilder:

    def __init__(self):
        self.obj = {}

    def set_current_page(self, value: int) -> GetAnnouncementsReqBuilder:
        """
        page number
        """
        self.obj['currentPage'] = value
        return self

    def set_page_size(self, value: int) -> GetAnnouncementsReqBuilder:
        """
        page Size
        """
        self.obj['pageSize'] = value
        return self

    def set_ann_type(
            self, value: GetAnnouncementsReq.AnnTypeEnum
    ) -> GetAnnouncementsReqBuilder:
        """
        Announcement types: latest-announcements , activities (latest activities), new-listings (new currency online), product-updates (product updates), vip (institutions and VIPs), maintenance-updates (system maintenance), product -updates (product news), delistings (currency offline), others, api-campaigns (API user activities), default : latest-announcements
        """
        self.obj['annType'] = value
        return self

    def set_lang(
            self,
            value: GetAnnouncementsReq.LangEnum) -> GetAnnouncementsReqBuilder:
        """
        Language type, the default is en_US, the specific value parameters are as follows
        """
        self.obj['lang'] = value
        return self

    def set_start_time(self, value: int) -> GetAnnouncementsReqBuilder:
        """
        Announcement online start time (milliseconds)
        """
        self.obj['startTime'] = value
        return self

    def set_end_time(self, value: int) -> GetAnnouncementsReqBuilder:
        """
        Announcement online end time (milliseconds)
        """
        self.obj['endTime'] = value
        return self

    def build(self) -> GetAnnouncementsReq:
        return GetAnnouncementsReq(**self.obj)
