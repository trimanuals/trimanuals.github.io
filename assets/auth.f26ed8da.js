import{r as C}from"./roles.79cfc4cb.js";import{u as E,a as v,t as u,d as m}from"./index.6def9867.js";const g=async(o,a)=>{let r=!0;return o.matched.map(({meta:e})=>e).forEach(({action:e,resource:l})=>{if(e&&l){const i=C.can(a)[e](l);i!=null&&i.granted||(r=!1)}}),r};var L=g,w=({router:o})=>{o.beforeEach(async(a,r,t)=>{let e=!0;if(a.matched.some(s=>s.meta.customer)&&!["LOCAL","DEV","DEV_AJ_LOCAL"].includes("TRM")){const s=a.matched.map(c=>c.meta.customer).filter(Boolean);if(!(s!=null&&s.every(c=>c==null?void 0:c.includes("TRM"))))return t("/404")}const d=a.matched.some(s=>s.meta.protected),f=E(),{userRole:h,isLibraryEnabled:p}=v(f);if(d){if(await f.getAuth(),f.auth||(e=!1),e===!1)return t({path:"/login",query:{redirect:a.path}});await L(a,u(h))||(e=!1)}a.matched.some(s=>{var n;return(n=s.meta.perms)==null?void 0:n.includes("library")})&&!u(p)&&(e=!1),m(!0),e?t():t("/401")}),o.afterEach(()=>{m(!1)})};export{w as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5mMjZlZDhkYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3JvbGVzL2hhc0FjY2Vzcy5qcyIsIi4uLy4uLy4uL3NyYy9ib290L2F1dGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcm9sZXMgfSBmcm9tICcuL3JvbGVzJztcblxuY29uc3QgaGFzQWNjZXNzID0gYXN5bmMgKHRvLCByb2xlKSA9PiB7XG4gIGxldCBhbGxvdyA9IHRydWU7XG4gIGNvbnN0IG1ldGFzID0gdG8ubWF0Y2hlZC5tYXAoKHsgbWV0YSB9KSA9PiBtZXRhKTtcbiAgbWV0YXMuZm9yRWFjaCgoeyBhY3Rpb24sIHJlc291cmNlIH0pID0+IHtcbiAgICBpZiAoYWN0aW9uICYmIHJlc291cmNlKSB7XG4gICAgICBjb25zdCBwZXJtaXNzaW9uID0gcm9sZXMuY2FuKHJvbGUpW2FjdGlvbl0ocmVzb3VyY2UpO1xuICAgICAgaWYgKCFwZXJtaXNzaW9uPy5ncmFudGVkKSB7XG4gICAgICAgIGFsbG93ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYWxsb3c7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYXNBY2Nlc3M7XG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCBoYXNBY2Nlc3MgZnJvbSAnLi4vdXRpbHMvcm9sZXMvaGFzQWNjZXNzJztcbmltcG9ydCB0b2dnbGVMb2FkaW5nIGZyb20gJ3NyYy91dGlscy90b2dnbGVMb2FkaW5nJztcbmltcG9ydCB7IHVzZUNvcmVTdG9yZSB9IGZyb20gJ3NyYy9zdG9yZXMvY29yZS1zdG9yZSc7XG5pbXBvcnQgeyBzdG9yZVRvUmVmcyB9IGZyb20gJ3BpbmlhJztcbmltcG9ydCB7IHRvVmFsdWUgfSBmcm9tICd2dWUnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyByb3V0ZXIgfTogeyByb3V0ZXI6IFJvdXRlciB9KSA9PiB7XG4gIHJvdXRlci5iZWZvcmVFYWNoKGFzeW5jICh0bywgZnJvbSwgbmV4dCkgPT4ge1xuICAgIGxldCBhbGxvdyA9IHRydWU7XG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICAvKiAgICAgICAgICAgICAgICAgICAgICBDb250cm9sIGN1c3RvbWVyIHNwZWNpZmljIHJvdXRlcyAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgY29uc3QgaXNDdXN0b21lclNwZWNpZmljID0gdG8ubWF0Y2hlZC5zb21lKCh4KSA9PiB4Lm1ldGEuY3VzdG9tZXIpO1xuICAgIGNvbnN0IGlzRW52SW5jbHVkZXNDdXN0b21lciA9XG4gICAgICBpc0N1c3RvbWVyU3BlY2lmaWMgJiZcbiAgICAgICFbJ0xPQ0FMJywgJ0RFVicsICdERVZfQUpfTE9DQUwnXS5pbmNsdWRlcyhwcm9jZXNzLmVudi5DVVNUT01FUl9JRCk7XG5cbiAgICBpZiAoaXNFbnZJbmNsdWRlc0N1c3RvbWVyKSB7XG4gICAgICBjb25zdCBjdXN0b21lciA9IHRvLm1hdGNoZWQubWFwKCh4KSA9PiB4Lm1ldGEuY3VzdG9tZXIpLmZpbHRlcihCb29sZWFuKTtcblxuICAgICAgY29uc3QgaW5jbHVkZXNDdXN0b21lciA9ICFjdXN0b21lcj8uZXZlcnkoKGN1c3RvbWVyQXJyYXkpID0+XG4gICAgICAgIGN1c3RvbWVyQXJyYXk/LmluY2x1ZGVzKHByb2Nlc3MuZW52LkNVU1RPTUVSX0lEKVxuICAgICAgKTtcblxuICAgICAgaWYgKGluY2x1ZGVzQ3VzdG9tZXIpIHtcbiAgICAgICAgcmV0dXJuIG5leHQoJy80MDQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgLyogICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRyb2wgcHJvdGVjdGVkIFJvdXRlcyAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgY29uc3QgcmVxdWlyZXNBdXRoID0gdG8ubWF0Y2hlZC5zb21lKCh4KSA9PiB4Lm1ldGEucHJvdGVjdGVkKTtcblxuICAgIGNvbnN0IGNvcmVTdG9yZSA9IHVzZUNvcmVTdG9yZSgpO1xuICAgIGNvbnN0IHsgdXNlclJvbGUsIGlzTGlicmFyeUVuYWJsZWQgfSA9IHN0b3JlVG9SZWZzKGNvcmVTdG9yZSk7XG4gICAgaWYgKHJlcXVpcmVzQXV0aCkge1xuICAgICAgYXdhaXQgY29yZVN0b3JlLmdldEF1dGgoKTtcblxuICAgICAgaWYgKCFjb3JlU3RvcmUuYXV0aCkge1xuICAgICAgICBhbGxvdyA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGFsbG93ID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gbmV4dCh7IHBhdGg6ICcvbG9naW4nLCBxdWVyeTogeyByZWRpcmVjdDogdG8ucGF0aCB9IH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zdCByb2xlID0gY29yZVN0b3JlLmF1dGg/LnVzZXIucm9sZTtcbiAgICAgIGNvbnN0IGRvZXNIYXZlQWNjZXNzID0gYXdhaXQgaGFzQWNjZXNzKHRvLCB0b1ZhbHVlKHVzZXJSb2xlKSk7XG5cbiAgICAgIGlmICghZG9lc0hhdmVBY2Nlc3MpIHtcbiAgICAgICAgYWxsb3cgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlicmFyeSBhY2Nlc3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIGlmIChcbiAgICAgIHRvLm1hdGNoZWQuc29tZSgoeCkgPT4geC5tZXRhLnBlcm1zPy5pbmNsdWRlcygnbGlicmFyeScpKSAmJlxuICAgICAgIXRvVmFsdWUoaXNMaWJyYXJ5RW5hYmxlZClcbiAgICApIHtcbiAgICAgIGFsbG93ID0gZmFsc2U7XG4gICAgfVxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICB0b2dnbGVMb2FkaW5nKHRydWUpO1xuICAgIGlmIChhbGxvdykgbmV4dCgpO1xuICAgIGVsc2UgbmV4dCgnLzQwMScpO1xuICB9KTtcblxuICByb3V0ZXIuYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICB0b2dnbGVMb2FkaW5nKGZhbHNlKTtcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbImhhc0FjY2VzcyIsInRvIiwicm9sZSIsImFsbG93IiwibWV0YSIsImFjdGlvbiIsInJlc291cmNlIiwicGVybWlzc2lvbiIsInJvbGVzIiwiaGFzQWNjZXNzJDEiLCJhdXRoIiwicm91dGVyIiwiZnJvbSIsIm5leHQiLCJ4IiwiY3VzdG9tZXIiLCJjdXN0b21lckFycmF5IiwicmVxdWlyZXNBdXRoIiwiY29yZVN0b3JlIiwidXNlQ29yZVN0b3JlIiwidXNlclJvbGUiLCJpc0xpYnJhcnlFbmFibGVkIiwic3RvcmVUb1JlZnMiLCJ0b1ZhbHVlIiwiX2EiLCJ0b2dnbGVMb2FkaW5nIl0sIm1hcHBpbmdzIjoicUdBRUEsTUFBTUEsRUFBWSxNQUFPQyxFQUFJQyxJQUFTLENBQ3BDLElBQUlDLEVBQVEsR0FFWixPQURjRixFQUFHLFFBQVEsSUFBSSxDQUFDLENBQUUsS0FBQUcsQ0FBSSxJQUFPQSxDQUFJLEVBQ3pDLFFBQVEsQ0FBQyxDQUFFLE9BQUFDLEVBQVEsU0FBQUMsQ0FBUSxJQUFPLENBQ3RDLEdBQUlELEdBQVVDLEVBQVUsQ0FDdEIsTUFBTUMsRUFBYUMsRUFBTSxJQUFJTixDQUFJLEVBQUVHLEdBQVFDLENBQVEsRUFDOUNDLEdBQUEsTUFBQUEsRUFBWSxVQUNmSixFQUFRLEdBRVgsQ0FDTCxDQUFHLEVBRU1BLENBQ1QsRUFFQSxJQUFBTSxFQUFlVCxFQ1ZmVSxFQUFlLENBQUMsQ0FBRSxPQUFBQyxDQUFBLElBQWlDLENBQ2pEQSxFQUFPLFdBQVcsTUFBT1YsRUFBSVcsRUFBTUMsSUFBUyxDQUMxQyxJQUFJVixFQUFRLEdBU1osR0FMMkJGLEVBQUcsUUFBUSxLQUFNYSxHQUFNQSxFQUFFLEtBQUssUUFBUSxHQUcvRCxDQUFDLENBQUMsUUFBUyxNQUFPLGNBQWMsRUFBRSxTQUFTLEtBQXVCLEVBRXpDLENBQ25CLE1BQUFDLEVBQVdkLEVBQUcsUUFBUSxJQUFLYSxHQUFNQSxFQUFFLEtBQUssUUFBUSxFQUFFLE9BQU8sT0FBTyxFQU10RSxHQUp5QixFQUFDQyxHQUFBLE1BQUFBLEVBQVUsTUFBT0MsR0FDekNBLEdBQUEsWUFBQUEsRUFBZSxTQUFTLFNBSXhCLE9BQU9ILEVBQUssTUFBTSxDQUV0QixDQU9NLE1BQUFJLEVBQWVoQixFQUFHLFFBQVEsS0FBTWEsR0FBTUEsRUFBRSxLQUFLLFNBQVMsRUFFdERJLEVBQVlDLElBQ1osQ0FBRSxTQUFBQyxFQUFVLGlCQUFBQyxDQUFpQixFQUFJQyxFQUFZSixDQUFTLEVBQzVELEdBQUlELEVBQWMsQ0FNaEIsR0FMQSxNQUFNQyxFQUFVLFVBRVhBLEVBQVUsT0FDTGYsRUFBQSxJQUVOQSxJQUFVLEdBQ0wsT0FBQVUsRUFBSyxDQUFFLEtBQU0sU0FBVSxNQUFPLENBQUUsU0FBVVosRUFBRyxJQUFLLENBQUEsQ0FBRyxFQUl2QyxNQUFNRCxFQUFVQyxFQUFJc0IsRUFBUUgsQ0FBUSxDQUFDLElBR2xEakIsRUFBQSxHQUVaLENBT0VGLEVBQUcsUUFBUSxLQUFNYSxHQUFNLE9BQUEsT0FBQVUsRUFBQVYsRUFBRSxLQUFLLFFBQVAsWUFBQVUsRUFBYyxTQUFTLFdBQVUsR0FDeEQsQ0FBQ0QsRUFBUUYsQ0FBZ0IsSUFFakJsQixFQUFBLElBSVZzQixFQUFjLEVBQUksRUFDZHRCLEVBQVlVLElBQ1hBLEVBQUssTUFBTSxDQUFBLENBQ2pCLEVBRURGLEVBQU8sVUFBVSxJQUFNLENBQ3JCYyxFQUFjLEVBQUssQ0FBQSxDQUNwQixDQUNIIn0=