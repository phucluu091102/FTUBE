import { Box, Card, CardMedia, Stack, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../../../utils/http";

const TypographyStyle = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RelatedSection = () => {
  
  const [relateds, setRelateds] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    http
      .get(`/products`)
      .then((res) => setRelateds(res.data))
      .catch((error) => alert(error));
  }, []);

  return (
    <Box>
      <Stack
        direction={"column"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        spacing={1}
      >
        {relateds.map((item) => (
          <Card
            key={item.id}
            sx={{
              display: "flex",
              width: "100%",
              height: 100,
              cursor: "pointer",
              borderRadius: 3,
              bgcolor: "unset",
              boxShadow: "unset",
            }}
            onClick={() => navigate(`./../${item.id}`)}
          >
            <CardMedia
              component="img"
              sx={{ width: 150, borderRadius: 3 }}
              image="https://images.unsplash.com/photo-1504457047772-27faf1c00561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1894&q=80"
            />
            <Box
              sx={{
                px: 1,
                py: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <TypographyStyle variant="subtitle2" component="div">
                {item.name}
              </TypographyStyle>
              <TypographyStyle variant="subtitle2" component="div">
                {item.chanelName}
              </TypographyStyle>
              <TypographyStyle variant="subtitle2" component="div">
                {item.view + " Views"} - {item.createDate}
              </TypographyStyle>
            </Box>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default RelatedSection;
