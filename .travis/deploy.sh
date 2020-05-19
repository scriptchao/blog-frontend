###
 # @Author: 托尼
 # @Date: 2020-05-19 11:31:52
 # @LastEditors: 托尼
 # @LastEditTime: 2020-05-19 12:23:45
### 

# path
SERVER_IP="121.43.224.240"
REMOTE="root@${SERVER_IP}"
UPLOAD_PATH="build/"
WORK_DIR="~/app/blog-frontend/"

# open 
ssh ${REMOTE} -o StrictHostKeyChecking=no "ls"

# cleanup
ssh ${REMOTE} "rm -rf ${WORK_DIR}"
# upload
scp -r ${UPLOAD_PATH} ${REMOTE}:${WORK_DIR}

