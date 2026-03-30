import codecs

file_path = 'd:/AboutCoding/CV_Website_SoSimple/congjie-pan.github.io/assets/js/lang/translations.js'

with codecs.open(file_path, 'r', 'utf-8') as f:
    text = f.read()

# For English
old_en_edu = """    // Education section
    'edu-cycu': 'Department of Information Management, Chung Yuan Christian University',
    'edu-junior': 'Senior Year',
    'edu-period': 'SEPTEMBER.2022 – PRESENT',"""

new_en_edu = """    // Education section
    'edu-ntnu': 'Graduate Institute of Information and Computer Education, National Taiwan Normal University - Master\\'s Program',
    'edu-ntnu-status': 'Incoming Master\\'s Student',
    'edu-ntnu-period': 'SEPTEMBER.2026 – JUNE.2028',
    'edu-cycu': 'Department of Information Management, Chung Yuan Christian University - Bachelor\\'s Program',
    'edu-cycu-status': 'Senior Year',
    'edu-cycu-period': 'SEPTEMBER.2022 – PRESENT',"""

text = text.replace(old_en_edu, new_en_edu)

# For zh-TW
old_tw_edu = """    // Education section
    'edu-cycu': '中原大學 資訊管理學系',
    'edu-junior': '四年級',
    'edu-period': '2022年9月 – 至今',"""

new_tw_edu = """    // Education section
    'edu-ntnu': '國立臺灣師範大學資訊教育研究所 - 碩士班',
    'edu-ntnu-status': '準碩士生',
    'edu-ntnu-period': '2026 年 9 月 – 2028 年 6 月',
    'edu-cycu': '中原大學資訊管理學系 - 學士班',
    'edu-cycu-status': '大學四年級',
    'edu-cycu-period': '2022 年 9 月 – 至今',"""

text = text.replace(old_tw_edu, new_tw_edu)

# For zh-CN
old_cn_edu = """    // Education section
    'edu-cycu': '台湾中原大学 信息管理学系',
    'edu-junior': '四年级',
    'edu-period': '2022年9月 – 至今',"""

new_cn_edu = """    // Education section
    'edu-ntnu': '国立台湾师范大学信息教育研究所 - 硕士班',
    'edu-ntnu-status': '准硕士生',
    'edu-ntnu-period': '2026 年 9 月 – 2028 年 6 月',
    'edu-cycu': '台湾中原大学信息管理学系 - 学士班',
    'edu-cycu-status': '大学四年级',
    'edu-cycu-period': '2022 年 9 月 – 至今',"""

text = text.replace(old_cn_edu, new_cn_edu)

with codecs.open(file_path, 'w', 'utf-8') as f:
    f.write(text)
print("Education translations updated successfully.")
