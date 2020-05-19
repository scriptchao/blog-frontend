#!/bin/bash

# path
SERVER_IP="121.43.224.240"
REMOTE="root@${SERVER_IP}"
UPLOAD_PATH="build/"
WORK_DIR="~/app/blog-frontend/"

# open 
ssh ${REMOTE} -o StrictHostKeyChecking=no "ls"

# open 
ssh ${REMOTE} "ls"

# cleanup
# ssh ${REMOTE} "rm -rf ${WORK_DIR}"
# upload
scp -r ${UPLOAD_PATH} ${REMOTE}:${WORK_DIR}

