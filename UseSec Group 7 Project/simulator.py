from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import time
from tranco import Tranco
import pandas as pd

t=Tranco()
websites=t.list().top(1000)


chrome_options = ChromeOptions()
chrome_options.add_argument("--disable-popup-blocking")
chrome_options.add_argument("--disable-notifications")
# chrome_options.add_extension('0.7.7_0.crx')
chrome_options.page_load_strategy = 'eager'
chrome_options.add_extension('./fpmon-fingerprinting-monitor-5f0748f/FPMON_extension.crx')
d = DesiredCapabilities.CHROME

d['goog:loggingPrefs'] = { 'browser':'ALL' }
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options, desired_capabilities=d)
time.sleep(2)
# driver.minimize_window()

results=[]
i = 0
for url in websites:
    i = i+1
    if i <= 200:
        continue
    print(i, url, end=' ')
    try:
        driver.get("https://"+url)
        time.sleep(1)
        logs=driver.get_log('browser')
        req=logs[-1]['message']
        id=req.find('url')
        final=eval(req.replace('\\','').replace('false','False')[id-3:-1])

        # res={
        #     'url': final['url'],
        #     'date': final['date'],
        #     'JS Attributes Tracked': final['coverage_entities'].split()[-1].split('/')[0][1:],
        #     'Fingerprinting Features': final['coverage_categories'].split()[-1].split('/')[0][1:],
        #     'Aggressive Features': final['aggressive_coverage'].split()[-1].split('/')[0][1:],
        #     'Aggresive Categories': final['aggressive_categories'].split()[-1].split('/')[0][1:],
        #     'Sensitive': final['fingerprint_categories'],
        #     'loadtime': final['loadtime']
        # }
        # results.append(res)

        curr = str(final['url']) + ',' + str(final['date']) + ',' + str(final['coverage_entities'].split()[-1].split('/')[0][1:]) + ',' + str(final['coverage_categories'].split()[-1].split('/')[0][1:]) + ',' + str(final['aggressive_coverage'].split()[-1].split('/')[0][1:]) + ',' + str(final['aggressive_categories'].split()[-1].split('/')[0][1:]) + ',' + str(final['fingerprint_categories']) + ',' + str(final['loadtime']) + '\n'
        print('done')
        file1 = open("Netherlands_FPMON.txt", "a")
        file1.write(curr)
        file1.close()

    except Exception as e:
        print('not done')

# df=pd.DataFrame(results)
# df.to_csv('res.csv', index=False)

driver.quit()