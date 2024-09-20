# 1단계: 환경 설정 및 dependancy 설치
FROM node:22-alpine AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@latest --activate 

###########################################################
# 2단계: next.js 빌드 단계
RUN apk update
RUN pnpm add -g turbo
RUN pnpm install --global pm2

# Set working directory
WORKDIR /app

# Dependancy install을 위해 package.json, package-lock.json, yarn.lock 복사 
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ../../

# Dependancy 설치 (새로운 lock 파일 수정 또는 생성 방지)
# RUN turbo prune --scope=web --docker
RUN pnpm install --frozen-lockfile

# Copy necessary files for installation
COPY .gitignore .gitignore


# Build the project
COPY turbo.json ../../

RUN turbo run build --filter=web

###########################################################

# 3단계: next.js 실행 단계
FROM base AS runner
WORKDIR /app

# container 환경에 시스템 사용자를 추가함
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# next.config.js에서 output을 standalone으로 설정하면 
# 빌드에 필요한 최소한의 파일만 ./next/standalone로 출력이 된다.
# standalone 결과물에는 public 폴더와 static 폴더 내용은 포함되지 않으므로, 따로 복사를 해준다.
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./apps/web/.next/standalone
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static

FROM nginx
EXPOSE 3000

CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "development"]
